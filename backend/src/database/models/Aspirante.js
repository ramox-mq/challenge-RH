module.exports = (sequelize, dataTypes) => {
    let alias = "Aspirantes";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dni: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        nombre: {
            type: dataTypes.STRING(20),
            allowNull: false,
        },
        apellido: {
            type: dataTypes.STRING(20),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(30),
            allowNull: false,
        },
        telefono: {
            type: dataTypes.INTEGER,
        },
        linkedinUrl: {
            type: dataTypes.STRING(255),
        },
        fecNac: {
            type: dataTypes.DATE,
        },
        sexo: {
            type: dataTypes.STRING(20),
        },
        imagen: {
            type: dataTypes.STRING(20),
        },
        idProfesion: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: "aspirantes",
        timestamps: false
    }
    
    const Aspirante = sequelize.define(alias, cols, config);

    return Aspirante;
}