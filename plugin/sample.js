class Sample {
    static get toolbox() {
        return {
            title: 'Image',
            icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
        };
    }

    // 해당 플러그인선택했을 때 블럭에 그려질 UI
    // 샘플 이미지 url이 필요하니까 단순한 input
    render() {
        this.drawUrl = 'https://embed.diagrams.net';
        this.iframe = document.createElement("iframe");
        this.iframe.setAttribute("frameborder", "0");
        window.addEventListener("message", (evt) => {
            if (evt.data.length < 1) return;
            var msg = JSON.parse(evt.data);
            switch (msg.event) {
                case "configure":
                    this.iframe.contentWindow.postMessage(
                        JSON.stringify({
                            action: "configure",
                            config: {
                                defaultFonts: ["Humor Sans", "Helvetica", "Times New Roman"],
                            },
                        }),
                        "*"
                    );
                    break;
                case "init":
                    this.iframe.contentWindow.postMessage(
                        JSON.stringify({ action: "load", autosave: 1, xml: '' }),
                        "*"
                    );
                    this.iframe.contentWindow.postMessage(
                        JSON.stringify({ action: "status", modified: true }),
                        "*"
                    );
                    break;
            }
        });
        this.iframe.setAttribute(
            "src",
            this.drawUrl +
            "/?splash=0&embed=1&ui=sketch&spin=1&proto=json&configure=1&ruler=1&zoom=4&viewbox=" +
            encodeURIComponent('{"x":3,"y":100,"width":1000,"height":1000}')
        );
        return this.iframe;
    }

    //어떤 데이터를 저장할것인지 구현이 필요함. blockContent는 render에서 넘어오는 항목
    save(blockContent) {
        return {
            url: blockContent.value
        }
    }
}

