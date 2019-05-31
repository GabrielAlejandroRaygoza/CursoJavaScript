'use strict'

var Project = require('../models/proyect')
var fs = require('fs');
var path = require('path')

var controller = {
    home: function(req, res) {
        return res.status(200).send({
            message: 'Soy la Home'
        })

    },
    test: function(req, res) {
        return res.status(200).send({
            message: 'Soy el metodo o accion Test del controlador de Project'
        })
    },
    saveProject: function(req, res) {
        var project = new Project();

        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStrore) => {
            if (err) {
                return res.status(500).send({ message: 'Error al guardar' });
            }
            if (!projectStrore) {
                return res.status(404).send({ message: 'No se guardo el proyecto' });
            }

            res.status(200).send({
                project: projectStrore
            });
        });
    },

    getProject: function(req, res) {
        var projectId = req.params.id;

        Project.findById(projectId, (err, project) => {
            if (projectId == null) return res.status(404).send({ message: 'El proyecto no existe' });

            if (err) {
                return res.status(500).send({ message: 'Error al devolver los datos' });
            }
            if (!project) {
                return res.status(404).send({ message: 'El proyecto no existe' });
            }
            return res.status(200).send({ project });
        });
    },

    getProjects: function(req, res) {
        Project.find().sort('year').exec((err, projects) => {
            if (err) return res.status(500).send({ message: 'Error al devolver los datos' });
            if (!projects) return res.status(404).send({ message: 'No hay proyectos para mostrar' });

            return res.status(200).send({ projects });
        });
    },

    updateProject: function(req, res) {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, { new: true }, (err, projectUpdated) => {
            if (err) return res.status(500).send({ message: 'Se ha producido un error al actualizar', err });
            if (!projectUpdated) return res.status(404).send({ message: 'No existe el proyecto para  actualizar el projecto' })

            return res.status(200).send({ project: projectUpdated });
        });
    },

    deleteProject: function(req, res) {
        var projectId = req.params.id;
        Project.findByIdAndRemove(projectId, (err, projectRemove) => {
            if (err) return res.status(500).send({ message: 'No se ha podido eliminar' });
            if (!projectRemove) return res.status(404).send({ message: ' No se ha podido eliminar este proyecto', err });

            return res.status(200).send({ project: projectRemove });
        })
    },

    uploadImage: function(req, res) {
        var projectId = req.params.id;
        var fileName = 'Imagen no subida...';

        if (req.files) {

            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('.');

            var fileExt = extSplit[1];

            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {
                Project.findByIdAndUpdate(projectId, { image: fileName }, { new: true }, (err, projectUpdate) => {
                    if (err) return res.status(500).send({
                        message: 'La imagen no se ha subido'
                    });

                    if (!projectUpdate) return res.status(404).send({
                        message: 'El proyecto no existe'
                    })

                    return res.status(200).send({
                        projectUpdate
                    })
                });
            } else {
                fs.unlink(filePath, err => {
                    return res.status(500).send({
                        message: 'La extension no es valida'
                    })
                })
            }


        } else {
            return res.status(500).send({
                message: "Imagen no subida"
            })
        }
    },

    getImageFile: function(req, res) {
        var file = req.params.image;
        var path_file = './uploads/' + file;

        fs.exists(path_file, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(path_file))
            } else {
                return res.status(200).send({
                    mesaage: 'No existe el archivo'
                });
            }
        })
    }
}

module.exports = controller;