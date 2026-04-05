(function () {
    const STORAGE_KEY = 'notepad_notes';
    const ACTIVE_KEY = 'notepad_active_note';

    const noteList = document.getElementById('noteList');
    const noteTitle = document.getElementById('noteTitle');
    const noteContent = document.getElementById('noteContent');
    const searchInput = document.getElementById('searchInput');
    const btnNew = document.getElementById('btnNew');
    const btnDelete = document.getElementById('btnDelete');
    const saveStatus = document.getElementById('saveStatus');
    const noteCount = document.getElementById('noteCount');

    let notes = loadNotes();
    let activeNoteId = localStorage.getItem(ACTIVE_KEY) || null;

    function generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    }

    function loadNotes() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    }

    function saveNotes() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }

    function formatDate(ts) {
        const d = new Date(ts);
        const now = new Date();
        const diff = now - d;
        if (diff < 60000) return 'Az önce';
        if (diff < 3600000) return Math.floor(diff / 60000) + ' dk önce';
        if (diff < 86400000) return Math.floor(diff / 3600000) + ' saat önce';
        return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' });
    }

    function getActiveNote() {
        return notes.find(n => n.id === activeNoteId) || null;
    }

    function renderNoteList(filter) {
        const query = (filter || '').toLowerCase().trim();
        const filtered = query
            ? notes.filter(n => n.title.toLowerCase().includes(query) || n.content.toLowerCase().includes(query))
            : notes.slice();

        filtered.sort((a, b) => b.updatedAt - a.updatedAt);

        noteList.innerHTML = '';
        filtered.forEach(note => {
            const li = document.createElement('li');
            li.className = 'note-item' + (note.id === activeNoteId ? ' selected' : '');
            li.dataset.id = note.id;

            const title = document.createElement('div');
            title.className = 'note-item-title';
            title.textContent = note.title || 'Başlıksız Not';

            const preview = document.createElement('div');
            preview.className = 'note-item-preview';
            preview.textContent = note.content ? note.content.substring(0, 80).replace(/\n/g, ' ') : 'Boş not';

            const date = document.createElement('div');
            date.className = 'note-item-date';
            date.textContent = formatDate(note.updatedAt);

            li.appendChild(title);
            li.appendChild(preview);
            li.appendChild(date);

            li.addEventListener('click', () => selectNote(note.id));
            noteList.appendChild(li);
        });

        noteCount.textContent = notes.length + ' not';
    }

    function renderEditor() {
        const note = getActiveNote();
        if (!note) {
            noteTitle.value = '';
            noteContent.value = '';
            noteTitle.disabled = true;
            noteContent.disabled = true;
            noteTitle.placeholder = 'Bir not seçin veya yeni not oluşturun';
            noteContent.placeholder = '';
            btnDelete.style.display = 'none';
            saveStatus.textContent = '';
            return;
        }

        noteTitle.disabled = false;
        noteContent.disabled = false;
        noteTitle.value = note.title;
        noteContent.value = note.content;
        noteTitle.placeholder = 'Not başlığı...';
        noteContent.placeholder = 'Notunuzu buraya yazın...';
        btnDelete.style.display = '';
        saveStatus.textContent = '';
    }

    function selectNote(id) {
        activeNoteId = id;
        localStorage.setItem(ACTIVE_KEY, id);
        renderNoteList(searchInput.value);
        renderEditor();
    }

    function createNote() {
        const note = {
            id: generateId(),
            title: '',
            content: '',
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        notes.unshift(note);
        saveNotes();
        selectNote(note.id);
        noteTitle.focus();
    }

    function deleteNote() {
        if (!activeNoteId) return;
        if (!confirm('Bu notu silmek istediğinize emin misiniz?')) return;

        notes = notes.filter(n => n.id !== activeNoteId);
        saveNotes();

        activeNoteId = notes.length > 0 ? notes[0].id : null;
        if (activeNoteId) {
            localStorage.setItem(ACTIVE_KEY, activeNoteId);
        } else {
            localStorage.removeItem(ACTIVE_KEY);
        }

        renderNoteList(searchInput.value);
        renderEditor();
    }

    function autoSave() {
        const note = getActiveNote();
        if (!note) return;

        note.title = noteTitle.value;
        note.content = noteContent.value;
        note.updatedAt = Date.now();

        saveNotes();
        renderNoteList(searchInput.value);
        saveStatus.textContent = 'Kaydedildi';
        setTimeout(() => { saveStatus.textContent = ''; }, 1500);
    }

    let saveTimeout;
    function debouncedSave() {
        clearTimeout(saveTimeout);
        saveStatus.textContent = 'Kaydediliyor...';
        saveTimeout = setTimeout(autoSave, 300);
    }

    btnNew.addEventListener('click', createNote);
    btnDelete.addEventListener('click', deleteNote);
    noteTitle.addEventListener('input', debouncedSave);
    noteContent.addEventListener('input', debouncedSave);
    searchInput.addEventListener('input', () => renderNoteList(searchInput.value));

    if (notes.length === 0) {
        createNote();
    } else {
        if (!notes.find(n => n.id === activeNoteId)) {
            activeNoteId = notes[0].id;
            localStorage.setItem(ACTIVE_KEY, activeNoteId);
        }
        renderNoteList();
        renderEditor();
    }
})();
