module.exports = (sequelize, DataTypes) => {
    const Aktivnost = sequelize.define("Aktivnost", {

        naziv: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        pocetak: {
            type: DataTypes.TIME,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        kraj: {
            type: DataTypes.TIME,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    Aktivnost.associate = models => {

        Aktivnost.belongsTo(models.Predmet, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade"
        });
        Aktivnost.belongsTo(models.Grupa, {
            foreignKey: {
                allowNull: true
            },
        });
        Aktivnost.belongsTo(models.Dan), {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade"
        };
        Aktivnost.belongsTo(models.Tip, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade"
        });
    }

    return Aktivnost;
};