const ApprovalController = require("./ApprovalController")
// @ponicode
describe("ApprovalController.store", () => {
    test("0", async () => {
        let object = [["https://croplands.org/app/a/confirm?t=", "https://", "ponicode.com"], ["http://www.croplands.org/account/confirm?t=", "https://twitter.com/path?abc", "Www.GooGle.com"], ["https://croplands.org/app/a/reset?token=", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://"]]
        await ApprovalController.store({ params: object, connectedUsers: [false, true, true], io: { to: () => "C:\\\\path\\to\\folder\\" } }, { json: () => "\"[3,\"false\",false]\"" })
    })

    test("1", async () => {
        let object = [["https://twitter.com/path?abc", "http://www.croplands.org/account/confirm?t=", "https://api.telegram.org/"], ["https://accounts.google.com/o/oauth2/revoke?token=%s", "Www.GooGle.com", "https://croplands.org/app/a/confirm?t="], ["Www.GooGle.com", "https://twitter.com/path?abc", "https://api.telegram.org/bot"]]
        await ApprovalController.store({ params: object, connectedUsers: [false, false, true], io: { to: () => "." } }, { json: () => "\"[3,\"false\",false]\"" })
    })

    test("2", async () => {
        let object = [["Www.GooGle.com", "https://api.telegram.org/", "https://accounts.google.com/o/oauth2/revoke?token=%s"], ["https://croplands.org/app/a/confirm?t=", "https://twitter.com/path?abc", "www.google.com"], ["https://api.telegram.org/", "https://", "http://www.croplands.org/account/confirm?t="]]
        await ApprovalController.store({ params: object, connectedUsers: [true, false, true], io: { to: () => "C:\\\\path\\to\\file.ext" } }, { json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("3", async () => {
        let object = [["Www.GooGle.com", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "https://"], ["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "http://base.com", "Www.GooGle.com"], ["https://api.telegram.org/bot", "https://api.telegram.org/", "http://www.example.com/route/123?foo=bar"]]
        await ApprovalController.store({ params: object, connectedUsers: [false, false, false], io: { to: () => "C:\\\\path\\to\\folder\\" } }, { json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("4", async () => {
        let object = [["https://api.telegram.org/", "http://www.example.com/route/123?foo=bar", "https://twitter.com/path?abc"], ["http://www.croplands.org/account/confirm?t=", "https://api.telegram.org/bot", "https://api.telegram.org/"], ["https://api.telegram.org/", "http://base.com", "Www.GooGle.com"]]
        await ApprovalController.store({ params: object, connectedUsers: [true, false, true], io: { to: () => "path/to/file.ext" } }, { json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
    })

    test("5", async () => {
        await ApprovalController.store(undefined, undefined)
    })
})
