const { cmd } = require("../command");

cmd({
    pattern: "button1",
    desc: "Send interactive button message.",
    category: "info",
    filename: __filename,
}, async (conn, mek, m, { reply }) => {
    const buttons = [
        { buttonId: "-song previt previt", buttonText: { displayText: "Song" }, type: 1 },
        { buttonId: "-video previt previt", buttonText: { displayText: "Video" }, type: 1 }
    ];

    await conn.sendMessage(m.chat, {
        text: "Hello World!",
        footer: "izumi - 2025",
        buttons,
        headerType: 1,
        viewOnce: true
    }, { quoted: m });
});
