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
