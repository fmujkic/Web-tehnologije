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
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        kraj: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    Aktivnost.associate = models => {

        Aktivnost.belongsTo(models.Predmet);
        Aktivnost.belongsTo(models.Grupa);
        Aktivnost.belongsTo(models.Dan);
        Aktivnost.belongsTo(models.Tip);
    }

    return Aktivnost;
};