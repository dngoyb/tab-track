
module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
        title: DataTypes.STRING,
        artist: DataTypes.STRING,
        album: DataTypes.STRING,
        albumImage: DataTypes.STRING,
        genre: DataTypes.STRING,
        youtubeId: DataTypes.STRING,
        lyric: DataTypes.TEXT,
        tab: DataTypes.TEXT,
    });
    return Song
}