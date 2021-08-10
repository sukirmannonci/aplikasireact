'use strict';

module.exports = function (app) {
    var json = require('./controller');

    app.route('/')
        .get(json.index);

    app.route('/tampil')
        .get(json.tampilSemuaMahasiswa);
        
    app.route('/tampil/:id')
        .get(json.tampilBerdasarkanId);
    app.route('/tambah')
        .post(json.tambahDataMahasiswa);   
        
    app.route('/ubah')
        .put(json.ubahDataMahasiswa);   
        
    app.route('/hapus')
        .delete(json.deleteBerdasarkanId);      
}