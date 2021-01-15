const express = require('express');
const router = express.Router();
const db = require('../models');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));



//Predmet CRUD

router.post("/predmet", (req, res) => {

    db.Predmet.create({
        naziv: req.body.naziv
    }).then(() => res.send("Predmet je kreiran"));

});


router.get("/predmet", (req, res) => {
    db.Predmet.findAll().then((predmeti) => {
        res.send(predmeti);
    }).catch((err) => {
        if (err)
            console.log(err);
    });
});

router.put("/predmet", (req, res) => {
    db.Predmet.update({
        naziv: req.body.naziv
    }, {
        where: { id: req.body.id }
    }).then(() => res.send("Predmet je izmijenjen"));
});



router.delete("/predmet/:id", (req, res) => {
    db.Predmet.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("Predmet je obrisan"));
});



//Tip CRUD

router.post("/tip", (req, res) => {

    db.Tip.create({
        naziv: req.body.naziv
    }).then(() => res.send("Tip je kreiran"));

});


router.get("/tip", (req, res) => {
    db.Tip.findAll().then((tipovi) => {
        res.send(tipovi);
    }).catch((err) => {
        if (err)
            console.log(err);
    });
});

router.put("/tip", (req, res) => {
    db.Tip.update({
        naziv: req.body.naziv
    }, {
        where: { id: req.body.id }
    }).then(() => res.send("Tip je izmijenjen"));
});



router.delete("/tip/:id", (req, res) => {
    db.Tip.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("Tip je obrisan"));
});


//Dan CRUD

router.post("/dan", (req, res) => {
    db.Dan.create({
        naziv: req.body.naziv
    }).then(() => res.send("Dan obrisan"));
});


router.get("/dan", (req, res) => {
    db.Dan.findAll().then((dani) => {
        res.send(dani);
    }).catch((err) => {
        if (err)
            console.log(err);
    });
});

router.put("/dan", (req, res) => {
    db.Dan.update({
        naziv: req.body.naziv
    }, {
        where: { id: req.body.id }
    }).then(() => res.send("Dan je izmijenjen"));
});



router.delete("/dan/:id", (req, res) => {
    db.Tip.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("Dan je obrisan"));
});


//Aktivnost CRUD 

router.post("/aktivnost", (req, res) => {
    db.Aktivnost.create({
        naziv: req.body.naziv
    }).then(() => res.send("Aktivnost je kreirana"));
});


router.get("/aktivnost", (req, res) => {
    db.Aktivnost.findAll().then((aktivnosti) => {
        res.send(aktivnosti);
    }).catch((err) => {
        if (err)
            console.log(err);
    });
});

router.put("/aktivnost", (req, res) => {
    db.Aktivnost.update({
        naziv: req.body.naziv
    }, {
        where: { id: req.body.id }
    }).then(() => res.send("Aktivnost je izmijenjena"));
});



router.delete("/aktivnost/:id", function(req, res) {
    db.Aktivnost.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("Aktivnost je obrisana"));
});


//Grupa CRUD

router.post("/grupa", (req, res) => {

    db.Grupa.create({
        naziv: req.body.naziv
    }).then(() => res.send("Grupa je kreirana"));

});


router.get("/grupa", (req, res) => {
    db.Grupa.findAll().then((grupe) => {
        res.send(grupe);
    }).catch((err) => {
        if (err)
            console.log(err);
    });
});

router.put("/grupa", (req, res) => {
    db.Grupa.update({
        naziv: req.body.naziv
    }, {
        where: { id: req.body.id }
    }).then(() => res.send("grupa je izmijenjena"));
});



router.delete("/grupa/:id", (req, res) => {
    db.Grupa.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("Grupa je obrisana"));
});


//Student CRUD

router.post("/student", (req, res) => {

    db.Student.create({
        naziv: req.body.naziv
    }).then(() => res.send("Student je kreiran"));

});


router.get("/grupa", (req, res) => {
    db.Student.findAll().then((grupe) => {
        res.send(grupe);
    }).catch((err) => {
        if (err)
            console.log(err);
    });
});

router.put("/grupa", (req, res) => {
    db.Student.update({
        naziv: req.body.naziv
    }, {
        where: { id: req.body.id }
    }).then(() => res.send("Student je izmijenjen"));
});



router.delete("/grupa/:id", (req, res) => {
    db.Student.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("Student je obrisan"));
});








module.exports = router;