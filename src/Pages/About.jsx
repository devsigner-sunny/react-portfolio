/* eslint-disable */
function About() {

  const contents = [
    {
      dot: '',
      html:
        `<span class="methods">class
          <span class="propname">Sunny Kim </span>{
         </span>`,
    },
    {
      dot: '··',
      html:
      `
      <div class="comment">
        // I strive to deliver to create beautiful, performant websites 
      </div>
      `,
    },
    {
      dot: '··',
      html:
        `
      <div class="comment">// I enjoy creating extremely visual and interactive experiences.</div>
      `,
    },
    {
      dot: '··',
      html:
        `
      <span class="methods">constructor </span>() {
      `,
    },
    {
      dot: '····',
      html:
      `
      <span class="scope">this</span>.
      <span class="prop2">name</span>
      <span class="scope">=</span>
      <span class="string">'Sunny Kim';</span>
      `,
    }

  ];


  return (
    <div>
      <h1>About</h1>
      <div id="about" className="min100vh container-fluid">
        <div className="row align-self-top w-100 align-items-start justify-content-center">
          <div className="pt-0 col-sm-9 col-md-9 offset-sm-2 col-10 offset-1">
            <div className="timeline alt" />
            <small className="section-title bullet-title alt">About /&gt;</small>
            <div className="mt-3">
              <div className="code-wrp">

                {contents.map((content, index) =>
                  <div data-line-nr={index} className="code d-flex">
                    {content.dot &&
                      <span className="dot">
                        {content.dot}
                      </span>
                    }
                    <span dangerouslySetInnerHTML={ {__html: content.html} } />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
