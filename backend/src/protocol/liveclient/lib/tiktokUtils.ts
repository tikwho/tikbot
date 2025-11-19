let uu = [];

export function getRoomIdFromMainPageHtml(mainPageHtml) {
    let matchMeta = mainPageHtml.match(/room_id=([0-9]+)/);
    if (matchMeta && matchMeta[1]) return matchMeta[1];

    let matchJson = mainPageHtml.match(/"roomId":"([0-9]+)"/);
    if (matchJson && matchJson[1]) return matchJson[1];

    let validResponse = mainPageHtml.includes('"og:url"');

    throw new Error(validResponse ? 'User might be offline.' : 'Your IP or country might be blocked by TikTok.');
}

export function validateAndNormalizeUniqueId(uniqueId) {
    if (typeof uniqueId !== 'string') {
        throw new Error("Missing or invalid value for 'uniqueId'. Please provide the username from TikTok URL.");
    }

    // Support full URI
    uniqueId = uniqueId.replace('https://www.tiktok.com/', '');
    uniqueId = uniqueId.replace('/live', '');
    uniqueId = uniqueId.replace('@', '');
    uniqueId = uniqueId.trim();

    if (!uu.includes(uniqueId)) {
        uu.push(uniqueId);
    }

    return uniqueId;
}


export function addUniqueId(uniqueId) {
    const existingEntry = uu.find((x) => x.uniqueId === uniqueId);
    if (existingEntry) {
        existingEntry.ts = new Date().getTime();
    } else {
        uu.push({
            uniqueId,
            ts: new Date().getTime(),
        });
    }
}

export function removeUniqueId(uniqueId) {
    uu = uu.filter((x) => x.uniqueId !== uniqueId);
}

export function getUuc() {
    return uu.filter((x) => x.ts > new Date().getTime() - 10 * 60000).length;
}

// setInterval(() => {
//     uu = [];
// }, 1000 * 60 * 30);

// export default {
//     getRoomIdFromMainPageHtml,
//     validateAndNormalizeUniqueId,
//     getUuc,
// };
