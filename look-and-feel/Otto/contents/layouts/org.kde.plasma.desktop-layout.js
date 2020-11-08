var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "696",
                    "DialogWidth": "1229"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "546",
                    "ToolBoxButtonY": "32"
                },
                "/Wallpaper/org.kde.color/General": {
                    "Color": "255,255,255"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/media/Datos/wallpapers/8d98wrhcwlp51.png",
                    "SlidePaths": "/home/jorge/.local/share/wallpapers,/usr/share/wallpapers"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
