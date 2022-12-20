module.exports.JoinmailOptions =function JoinmailOptions(info)  {
    return {
        from: 'monet.yonsei@gmail.com',
        to: info.email,
        subject: '프로젝트 분석이 완료되었습니다.',
        html: "<!DOCTYPE html>\n" +
            "<html>\n" +
            "<head>\n" +
            `<title>등록하신 프로젝트 분석이 완료되었습니다.</title>\n` +
            "</head>\n" +
            "<body style=\"background-color:rgb(238,238,238); text-align: center; padding-top: 100px; height:600px;\">\n" +
            "<br>\n" +
            "<br>\n" +
            "<br>\n" +
            `<div>등록하신 프로젝트 분석이 완료되었습니다.</div>` +
            "<br>\n" +
            "<br>\n" +
            "<br>\n" +
            "\t<div style=\"display:inline-block;\">\n" +
            "<p style=\"font-size: 16px;\"><br>\n" +
            "자세한 정보는 홈페이지에서 확인 해 주세요.</p><br>\n" +
            // " <a href=\"https://www.neuroan.net\">바로가기</a>\n" +
            "<br>\n" +
            "<br>\n" +
            "<br>\n" +
            "<br>\n" +
            "<br>\n" +
            "</p>\n" +
            "</div>\n" +
            "</body>\n" +
            "</html>"
    }
};
