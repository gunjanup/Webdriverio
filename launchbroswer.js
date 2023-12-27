describe("launch browser",()=>
{
    it("browser launched",async()=>
    {
        //await browser.pause(1000)
        await browser.url("https://www.tutorialspoint.com/index.htm")
    })
})