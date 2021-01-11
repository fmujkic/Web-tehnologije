module.exports = (sequelize, DataTypes) => {
    const Tip = sequelize.define("Tip", {

        naziv: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    Tip.associate = models => {

        Tip.hasMany(models.Aktivnost);
    }

    return Tip;
};