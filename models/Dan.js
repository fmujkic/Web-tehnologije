module.exports = (sequelize, DataTypes) => {
    const Dan = sequelize.define("Dan", {

        naziv: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    Dan.associate = models => {

        Dan.hasMany(models.Aktivnost);
    }

    return Dan;
};