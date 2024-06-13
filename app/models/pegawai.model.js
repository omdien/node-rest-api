module.exports = mongoose => {

    const schema = mongoose.Schema(
    {
        nama: String,
        nip: String,
        email: String,
        noTelp: String,
        tglLahir: Date
    }, { timestamps: true 

    });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model('pegawai', schema);
}

