const { submitQuery } = require("~root/lib/database");

const deleteAlbumById = ({ albumId }) => submitQuery`
    DELETE FROM
        Albums
    WHERE
        Album_id=${albumId}
`;

module.exports = deleteAlbumById;
