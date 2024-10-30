function passar() {
    var midias = document.getElementById("midias")
    var video = document.getElementById("video")
    var seta = document.getElementById('setaDireita')

    var video2 = document.createElement('iframe')
    video2.setAttribute('id', 'video')
    video2.setAttribute('width', "560px")
    video2.setAttribute("height", "315px")
    video2.setAttribute("src", "https://www.youtube.com/embed/gs0K7ARl8Y0")
    video2.setAttribute("title","YouTube video player")
    video2.setAttribute("frameborder","0")
    video2.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share")
    video2.setAttribute("referrerpolicy", "strict-origin-when-cross-origin")
    video2.setAttribute("allowfullscreen", "")

    video.parentNode.removeChild(video)

    midias.appendChild(video2)

    seta.addEventListener('click', reset)
    function reset() {
        var midias = document.getElementById("midias")
        var video = document.getElementById("video")
        var seta = document.getElementById('setaDireita')

        var video2 = document.createElement('iframe')
        video2.setAttribute('id', 'video')
        video2.setAttribute('width', "560px")
        video2.setAttribute("height", "315px")
        video2.setAttribute("src", "https://www.youtube.com/embed/iQAFvRYIB8o")
        video2.setAttribute("title","YouTube video player")
        video2.setAttribute("frameborder","0")
        video2.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share")
        video2.setAttribute("referrerpolicy", "strict-origin-when-cross-origin")
        video2.setAttribute("allowfullscreen", "")

        video.parentNode.removeChild(video)

        midias.appendChild(video2)

        seta.addEventListener('click', clicar)
        function clicar() {
            var midias = document.getElementById("midias")
            var video = document.getElementById("video")
            var seta = document.getElementById('setaDireita')
        
            var video2 = document.createElement('iframe')
            video2.setAttribute('id', 'video')
            video2.setAttribute('width', "560px")
            video2.setAttribute("height", "315px")
            video2.setAttribute("src", "https://www.youtube.com/embed/t2P68KzIO0c?si=Yi225s-SV4wvPHHn")
            video2.setAttribute("title","YouTube video player")
            video2.setAttribute("frameborder","0")
            video2.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share")
            video2.setAttribute("referrerpolicy", "strict-origin-when-cross-origin")
            video2.setAttribute("allowfullscreen", "")
        
            video.parentNode.removeChild(video)
        
            midias.appendChild(video2)
        
            seta.addEventListener('click', clicar)
            function clicar() {
                return passar()
            }
        }
    }
}