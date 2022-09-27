const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAlbumByAlbumId = ({ albumId }) => submitQuery`
    SELECT 
       *
    FROM Albums
    WHERE Album_id= ${albumId}
    `;

module.exports = camelKeys(selectAlbumByAlbumId);
