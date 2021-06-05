module.exports = (sequelize, DataTypes) => {
    const Predmet = sequelize.define("Predmet", {

        naziv: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    Predmet.associate = models => {
        Predmet.hasMany(models.Grupa);
        Predmet.hasMany(models.Aktivnost);
    }

    return Predmet;
};