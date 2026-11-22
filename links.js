const sections = [

    // ==========================================
    // EMAIL
    // ==========================================

    {
        id: "email",
        title: "SBB & Email",
        items: [
            [
                { name: "SBB", url: "http://www.sbb.rs/" },
                { name: "Mail", url: "http://webmail.sbb.rs/" },
                { name: "Forum", url: "http://forum.sbb.rs/" },
                { name: "Portal", url: "https://sbb.rs/account/" }
            ],
            { name: "Gmail", url: "https://mail.google.com/" },
            { name: "Eclipso mail", url: "https://www.eclipso.eu/email.php" },
            { name: "Outlook Mail", url: "https://www.outlook.com/" },
            { name: "Yandex Mail", url: "https://mail.yandex.com/" },
            { name: "SMS from mobile", url: "https://messages.google.com/web/" }
        ]
    },

    // ==========================================
    // FORUMS
    // ==========================================

    {
        id: "forums",
        title: "Forumi",
        items: [
            { name: "Parapsihopatologija", url: "https://parapsihopatologija.com/forums/" },
            { name: "Burundi Forum", url: "http://vasudeva.forumburundi.com/" },
            { name: "KlanRUR Forum", url: "http://forum.klanrur.rs/" },
            { name: "Benchmark Forum", url: "http://www.benchmark.rs/forum/" },
            { name: "elitesecurity Forum", url: "http://www.elitesecurity.org/" }
        ]
    },

    // ==========================================
    // POLITICS AND SOCIETY
    // ==========================================

    {
        id: "politics",
        title: "Politika i društvo",
        items: [
            { name: "N1", url: "https://rs.n1info.com/" },
            { name: "Peščanik", url: "http://www.pescanik.net/" },
            { name: "Danas", url: "http://www.danas.rs/" },
            { name: "Beton", url: "http://www.elektrobeton.net/" },
            { name: "Balkan Download - Domaće knjige", url: "https://www.balkandownload.org/forum/35-doma%C4%87e-knjige/" }
        ]
    },

    // ==========================================
    // SOCIAL NETWORKS
    // ==========================================

    {
        id: "social",
        title: "Društvene mreže",
        items: [
            { name: "Twitter", url: "https://twitter.com/" },
            { name: "Bluesky", url: "https://bsky.app/" },
            { name: "Facebook", url: "https://www.facebook.com/" },
            { name: "Instagram", url: "https://www.instagram.com/" },
            { name: "reddit", url: "http://www.reddit.com/" }
        ]
    },

    // ==========================================
    // TV AND STREAMING
    // ==========================================

    {
        id: "tv",
        title: "TV & Streaming",
        items: [
            { name: "Youtube", url: "http://www.youtube.com/" },
            { name: "Twitch", url: "https://www.twitch.tv/" },
            { name: "EON", url: "https://eon.tv/" }
        ]
    },

    // ==========================================
    // SOFTWARE
    // ==========================================

    {
        id: "software",
        title: "Software",
        items: [
            { name: "Chocolatey Packages", url: "https://chocolatey.org/packages?q=&moderatorQueue=&prerelease=false&sortOrder=package-created" },
            { name: "Scoop", url: "https://scoop.sh/#/apps" },
            { name: "Portable Freeware", url: "http://www.portablefreeware.com/" },
            { name: "Softpedia", url: "http://win.softpedia.com/" }
        ]
    },

    // ==========================================
    // HARDWARE
    // ==========================================

    {
        id: "hardware",
        title: "Tehnika i Hardware",
        items: [
            { name: "IT Svet", url: "http://www.itsvet.com/" },
            { name: "Mobilni Svet", url: "http://www.mobilnisvet.com/" },
            { name: "ePonuda", url: "http://www.eponuda.com/" },
            { name: "Gigatron", url: "http://www.gigatron.rs/" },
            { name: "BigBang", url: "https://www.bigbang.rs/" }
        ]
    },

    // ==========================================
    // SHOPPING
    // ==========================================

    {
        id: "shopping",
        title: "Kupovina",
        items: [
            { name: "Temu", url: "http://www.temu.com/" },
            { name: "AliExpress", url: "http://www.aliexpress.com/" },
            { name: "Limundo", url: "http://www.limundo.com/" },
            { name: "Kupindo", url: "https://www.kupindo.com/" },
            { name: "Kursna lista", url: "http://www.kursna-lista.com/kursna-lista-nbs" },
            { name: "Banca Intesa eBanking", url: "https://intesaonline.bancaintesa.rs/web/logon" },
            { name: "Mobi Banka eBanking", url: "https://online.mobibanka.rs/" }
        ]
    },

    // ==========================================
    // MOVIES
    // ==========================================

    {
        id: "movies",
        title: "Filmovi",
        items: [
            { name: "iMDB", url: "https://www.imdb.com/" },
            { name: "Letterboxd", url: "https://letterboxd.com/" },
            { name: "Always Good Movies", url: "https://alwaysgoodmovies.com/" },
            { name: "Freedom Patreon", url: "https://www.patreon.com/cw/MisliteMojomGlavom/posts" },
            { name: "YTS YIFY movies", url: "https://yts.gg" },
            { name: "1337x Torrents", url: "https://1337x.to/" },
            { name: "ru tracker movies", url: "https://rutracker.org/forum/viewforum.php?f=2339" },
            { name: "EXT Torrents", url: "https://ext.to/" },
            { name: "titlovi.com", url: "http://titlovi.com/" },
            { name: "Podnapisi", url: "http://www.podnapisi.net/" },
            { name: "SUBDL", url: "https://subdl.com/" }
        ]
    },

    // ==========================================
    // HOME LAB
    // ==========================================

    {
        id: "home",
        title: "Home Lab",
        type: "services",
        items: [
            {
                name: "ARTHAUS KINO",
                icon: "🎬",
                dns: "https://kino.davor.in.rs/",
                ip: "http://192.168.20.10:28096/"
            },
            {
                name: "qBittorrent",
                icon: "🌐",
                dns: "https://torrent.davor.in.rs/",
                ip: "https://192.168.20.10:18181/"
            },
            {
                name: "QUI",
                icon: "🌐",
                dns: "https://qui.davor.in.rs/"
                ip: "http://192.168.20.254:7476/"
            },
            {
                name: "Paperless-ngx",
                icon: "📄",
                dns: "https://paperless.davor.in.rs/"
            },
            {
                name: "Anchor (notes)",
                icon: "📝",
                dns: "https://notes.davor.in.rs/"
                ip: "http://192.168.20.254:43030/"
            },
            {
                name: "Forgejo",
                icon: "🧑‍💻",
                dns: "https://git.davor.in.rs/"
                ip: "http://192.168.20.254:3073/"
            },
            {
                name: "Excalidraw",
                icon: "✏️",
                dns: "https://excalidraw.davor.in.rs/",
                ip: "http://192.168.20.254:4002/"
            },
            {
                name: "Trip",
                icon: "🗺️",
                dns: "https://trip.davor.in.rs/",
                ip: "https://192.168.20.254:48081/"
            },
            {
                name: "Wake On Lan",
                icon: "🛌",
                dns: "https://wol.davor.in.rs/",
                ip: "http://192.168.20.254:8090/"
            },
            {
                name: "NAS",
                icon: "💽",
                dns: "https://nas.davor.in.rs/",
                ip: "https://192.168.20.10:38031/"
            },
            {
                name: "Pi-hole",
                icon: "🌐",
                dns: "https://pihole.davor.in.rs/",
                ip: "http://192.168.20.254:8080/"
            },
            {
                name: "voidAuth",
                icon: "🧑",
                dns: "https://id.davor.in.rs/"
                ip: "http://192.168.20.254:3000/"
            },
            {
                name: "Dockhand",
                icon: "🐋",
                dns: "https://dockhand.davor.in.rs/",
                ip: "http://192.168.20.254:3005/"
            },
            {
                name: "Cloudflared",
                icon: "☁️",
                ip: "http://192.168.20.254:14333/"
            }
        ]
    }

];
