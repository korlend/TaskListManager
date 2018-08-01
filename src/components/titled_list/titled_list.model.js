

export class TitledListModel {

    _inEdit = false;

    _dump: TitledListModel;

    title = '';
    description = '';

    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    edit() {
        if (!this._inEdit) {
            this._inEdit = true;
            this._dump = new TitledListModel(this.title, this.description);
        }
    }

    cancelEdit() {
        if (this._inEdit) {
            this.title = this._dump.title;
            this.description = this._dump.description;
            this._inEdit = false;
        }
    }

    save() {
        if (this._inEdit) {
            this._inEdit = false;
        }
    }


}