import {Command, NamedCommand} from "../../core";
import * as https from "https";

export default new NamedCommand({
    description: "Shortens a given URL.",
    run: "Please provide a URL.",
    any: new Command({
        async run({send, message, channel, guild, author, member, client, args}) {
            https.get("https://is.gd/create.php?format=simple&url=" + encodeURIComponent(args[0]), function (res) {
                var body = "";
                res.on("data", function (chunk) {
                    body += chunk;
                });
                res.on("end", function () {
                    send(`<${body}>`);
                });
            });
        }
    })
});
