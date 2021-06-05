module.exports = (sequelize, DataTypes) => {
    const Grupa = sequelize.define("Grupa", {

        naziv: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });


    Grupa.associate = models => {
        Grupa.belongsTo(models.Predmet, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade"
        });
        Grupa.belongsToMany(models.Student, { through: 'GrupaStudent' });
    }

    return Grupa;
};