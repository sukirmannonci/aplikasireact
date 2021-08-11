'use strict';

var response = require('./rest');
var connection = require('./connect');

exports.index = function (req,res) {
    response.ok("Aplikasi rest api sudah berjalan", res)
};

// Menampilkan semua data mahasiswa
exports.tampilSemuaMahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if (error) {
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};

// Menampilkan semu data mahasiswa berdasarkan id
exports.tampilBerdasarkanId = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa where id = ?', [id],
    function(error, rows, fields){
        if(error) {
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};

// Menambahkan data mahasiswa
exports.tambahDataMahasiswa = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) values (?, ?, ?)', 
    [nim, nama, jurusan],    
    function(error, rows, fields){
        if (error) {
            console.log(error);
        }else{
            response.ok("Berhasil menambahkan data!", res)
        }
    });
};

// Mengubah data berdasarkan id
exports.ubahDataMahasiswa = function (req, res) {
    let id = req.body.id;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? where id=?', [nim, nama, jurusan, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            }else{
                response.ok("Berhasil update data mahasiswa!", res)
            }
        }
    );
};

// Menghapus data berdasarkan id
exports.deleteBerdasarkanId = function (req, res) {
    var id = req.body.id;
    connection.query('DELETE FROM mahasiswa where id=?', [id],
    function(error, rows, fields){
        if(error) {
            console.log(error);
        }else{
            response.ok("Berhasil delete data mahasiswa!", res)
        }
    });
}

// Menampilkan matakuliah group
exports.tampilGroupMatakuliah = function (req, res) {
    connection.query('SELECT mahasiswa.id, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id ORDER BY mahasiswa.id', function (error, rows, fields) {
        if (error) {
            console.log(error);
        }else{
            response.oknested(rows, res);
        }
    });
}; 