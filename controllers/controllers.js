const db = require('../db');

const ListPersonas = (req, res) => {
    const sql = "SELECT * FROM persona";
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error al obtener personas:", err);
            return res.status(500).render("error", { 
                message: "Error al obtener personas",
                error: err
            });
        }
        res.render("personas", {
            title: "Lista de Personas",
            mensaje: "Gestión de Personas",
            personas: result
        });
    });
};

const CreatePersona = (req, res) => {
    const { nombre, email } = req.body;
    const sql = "INSERT INTO persona (nombre, email) VALUES (?, ?)";
    db.query(sql, [nombre, email], (err, result) => {
        if (err) {
            console.error("Error al crear persona:", err);
            return res.status(500).render("error", {
                message: "Error al crear persona",
                error: err
            });
        }
        res.redirect('/personas');
    });
};

const UpdatePersona = (req, res) => {
    const { id, nombre, email } = req.body;
    const sql = "UPDATE persona SET nombre = ?, email = ? WHERE id = ?";
    db.query(sql, [nombre, email, id], (err, result) => {
        if (err) {
            console.error("Error al actualizar persona:", err);
            return res.status(500).render("error", {
                message: "Error al actualizar persona",
                error: err
            });
        }
        res.redirect('/personas');
    });
};

const DeletePersona = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM persona WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Error al eliminar persona:", err);
            return res.status(500).render("error", {
                message: "Error al eliminar persona",
                error: err
            });
        }
        res.redirect('/personas');
    });
};

const ListOficinas = (req, res) => {
    const sql = "SELECT * FROM oficina";
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error al obtener oficinas:", err);
            return res.status(500).render("error", { 
                message: "Error al obtener oficinas",
                error: err
            });
        }
        res.render("oficinas", {
            title: "Lista de Oficinas",
            mensaje: "Gestión de Oficinas",
            oficinas: result
        });
    });
};

const CreateOficina = (req, res) => {
    const { denominacion } = req.body;
    const sql = "INSERT INTO oficina (denominacion) VALUES (?)";
    db.query(sql, [denominacion], (err, result) => {
        if (err) {
            console.error("Error al crear oficina:", err);
            return res.status(500).render("error", {
                message: "Error al crear oficina",
                error: err
            });
        }
        res.redirect('/oficinas');
    });
};

const UpdateOficina = (req, res) => {
    const { id, denominacion } = req.body;
    const sql = "UPDATE oficina SET denominacion = ? WHERE id = ?";
    db.query(sql, [denominacion, id], (err, result) => {
        if (err) {
            console.error("Error al actualizar oficina:", err);
            return res.status(500).render("error", {
                message: "Error al actualizar oficina",
                error: err
            });
        }
        res.redirect('/oficinas');
    });
};

const DeleteOficina = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM oficina WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Error al eliminar oficina:", err);
            return res.status(500).render("error", {
                message: "Error al eliminar oficina",
                error: err
            });
        }
        res.redirect('/oficinas');
    });
};

const buscarPersona = (req, res) => {
    res.render('busqueda/buscar-personas', { 
        title: "Buscar Personas",
        personas: undefined 
    });
};

const buscarPersonaResultados = (req, res) => {
    const keyword = req.body.keyword;
    const sql = "SELECT * FROM persona WHERE nombre LIKE ? OR email LIKE ?";
    const searchTerm = `%${keyword}%`;
    
    db.query(sql, [searchTerm, searchTerm], (err, result) => {
        if (err) {
            console.error("Error al buscar personas:", err);
            return res.status(500).render("error", { 
                message: "Error al buscar personas",
                error: err
            });
        }
        res.render('busqueda/buscar-personas', {
            title: "Resultados de búsqueda",
            personas: result
        });
    });
};

const buscarOficina = (req, res) => {
    res.render('busqueda/buscar-oficinas', { 
        title: "Buscar Oficinas",
        oficinas: undefined 
    });
};

const buscarOficinaResultados = (req, res) => {
    const keyword = req.body.keyword;
    const sql = "SELECT * FROM oficina WHERE denominacion LIKE ?";
    const searchTerm = `%${keyword}%`;
    
    db.query(sql, [searchTerm], (err, result) => {
        if (err) {
            console.error("Error al buscar oficinas:", err);
            return res.status(500).render("error", { 
                message: "Error al buscar oficinas",
                error: err
            });
        }
        res.render('busqueda/buscar-oficinas', {
            title: "Resultados de búsqueda",
            oficinas: result
        });
    });
};

module.exports = {
    ListPersonas,
    CreatePersona,
    UpdatePersona,
    DeletePersona,
    ListOficinas,
    CreateOficina,
    UpdateOficina,
    DeleteOficina,
    buscarPersona,
    buscarPersonaResultados,
    buscarOficina,
    buscarOficinaResultados
};