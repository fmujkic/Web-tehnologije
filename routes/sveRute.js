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
        }).then(() => res.send("Predmet je kreiran"))
        .catch((err) => {
            if (err)
                console.log(err);
        });

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
        }).then(() => res.send("Predmet je izmijenjen"))
        .catch((err) => {
            if (err)
                console.log(err);
        });
});

router.delete("/predmet/:id", (req, res) => {
    db.Predmet.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => res.send("Predmet je obrisan"))
        .catch((err) => {
            if (err)
                console.log(err);
        });
});


//Tip CRUD

router.post("/tip", (req, res) => {
    db.Tip.create({
            naziv: req.body.naziv
        }).then(() => res.send("Tip je kreiran"))
        .catch((err) => {
            if (err)
                console.log(err);
        });
});

router.get("/tip", (req, res) => {
    db.Tip.findAll().then((tipovi) => {
        res.send(tipovi);
    }).catch((err) => {
        if (err)
            console.log(err);
    });
});


router.get("/tipDaj", (req, res) => {
    db.Tip.findOne({
        where: {
            id: req.body.id
        }
    }).then((tip) => {
        res.send(tip.naziv);
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
        }).then(() => res.send("Tip je izmijenjen"))
        .catch((err) => {
            if (err)
                console.log(err);
        });
});

router.delete("/tip/:id", (req, res) => {
    db.Tip.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => res.send("Tip je obrisan"))
        .catch((err) => {
            if (err)
                console.log(err);
        });
});


//Dan CRUD

router.post("/dan", (req, res) => {
    db.Dan.create({
            naziv: req.body.naziv
        }).then(() => res.send("Dan obrisan"))
        .catch((err) => {
            if (err)
                console.log(err);
        });
});

router.get("/dan", (req, res) => {
    db.Dan.findAll().then((dani) => {
        res.send(dani);
    }).catch((err) => {
        if (err)
            console.log(err);
    });
});

router.get("/danDaj", (req, res) => {
    db.Dan.findOne({
        where: {
            id: req.body.id
        }
    }).then((tip) => {
        res.send(tip.naziv);
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
        }).then(() => res.send("Dan je izmijenjen"))
        .catch((err) => {
            if (err)
                console.log(err);
        });
});

router.delete("/dan/:id", (req, res) => {
    db.Dan.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => res.send("Dan je obrisan"))
        .catch((err) => {
            if (err)
                console.log(err);
        });
});

router.get("/danTrazi", (req, res) => {
    db.Dan.findOne({
            where: {
                naziv: req.body.naziv,
            }
        }).then((dan) => res.send(dan))
        .catch((err) => {
            if (err)
                console.log(err);
        });
});


//Aktivnost CRUD 

router.post("/aktivnost", (req, res) => {
    db.Aktivnost.create({
            naziv: req.body.naziv,
            pocetak: req.body.pocetak,
            kraj: req.body.kraj,
            PredmetId: req.body.PredmetID,
            GrupaId: req.body.GrupaID,
            DanId: req.body.DanID,
            TipId: req.body.TipID,

        }).then(() => res.send("Aktivnost je kreirana"))
        .catch((err) => {
            if (err)
                console.log(err);
        });




    db.Predmet.create({
            naziv: req.body.naziv
        }).then(() => res.send("Predmet je kreiran"))
        .catch((err) => {
            if (err)
                console.log(err);
        });





});

router.get("/aktivnost", (req, res) => {
    db.Aktivnost.findAll().then((aktivnosti) => {
        res.send(aktivnosti);
    }).catch((err) => {
        if (err)
            console.log(err)
            .catch((err) => {
                if (err)
                    console.log(err);
            });
    });
});

router.put("/aktivnost", (req, res) => {
    db.Aktivnost.update({
            naziv: req.body.naziv
        }, {
            where: { id: req.body.id }
        }).then(() => res.send("Aktivnost je izmijenjena"))
        .catch((err) => {
            if (err)
                console.log(err);
        });
});

router.delete("/aktivnost/:id", function(req, res) {
    db.Aktivnost.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => res.send("Aktivnost je obrisana"))
        .catch((err) => {
            if (err)
                console.log(err);
        });
});



//Grupa CRUD

router.post("/grupa", (req, res) => {
    db.Grupa.create({
            naziv: req.body.naziv,
            PremetID: 1
        }).then(() => res.send("Grupa je kreirana"))
        .catch((err) => {
            if (err)
                console.log(err);
        });
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
        }).then(() => res.send("Grupa je izmijenjena"))
        .catch((err) => {
            if (err)
                console.log(err);
        });
});

router.delete("/grupa/:id", (req, res) => {
    db.Grupa.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => res.send("Grupa je obrisana"))
        .catch((err) => {
            if (err)
                console.log(err);
        });
});


//Student CRUD

router.post("/student", (req, res) => {
    db.Student.create({
        ime: req.body.ime,
        index: req.body.index

    }).then((student) => {
        res.send(student)
    }).catch((err) => {
        if (err)
            console.log(err);
    });
});



router.get("/student", (req, res) => {
    db.Student.findAll().then((grupe) => {
        res.send(grupe);
    }).catch((err) => {
        if (err)
            console.log(err);
    });
});

router.put("/student", (req, res) => {
    db.Student.update({
            naziv: req.body.naziv,
            index: req.body.index
        }, {
            where: { id: req.body.id }
        }).then(() => res.send("Student je izmijenjen"))
        .catch((err) => {
            if (err)
                console.log(err);
        });
});

router.delete("/student/:id", (req, res) => {
    db.Student.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => res.send("Student je obrisan"))
        .catch((err) => {
            if (err)
                console.log(err);
        });
});



module.exports = router;