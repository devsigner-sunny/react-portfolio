/* eslint-disable */
import "./About.scss";

function About() {

  const contents = [
    {
      dot: '',
      html:
        `<span class="class">class
          <span class="name">Sunny Kim </span>{
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
      <span class="method">constructor </span>() {
      `,
    },
    {
      dot: '····',
      html:
      `
      <span class="scope">this</span>.<span class="prop">name</span><span class="scope">=</span><span class="string">'Sunny Kim'</span>
      `,
    },
    {
      dot: '····',
      html:
        `
      <span class="scope">this</span>.<span class="prop">dateOfBirthTimestamp</span><span class="scope">=</span><span class="string">599342400</span>
      `,
    },
    {
      dot: '····',
      html:
        `
      <span class="scope">this</span>.<span class="prop2">email</span><span class="scope">=</span><span class="string">'devsigner.sunny@gmail.com'</span>
      `,
    },
    {
      dot: '··',
      html:
        `}`,
    },
    {
      dot: '··',
      html:
        `
        <span class="method">workExperience</span>() {
        `,
    },
    {
      dot: '····',
      html:
        `
      <span class="return">return</span> [
      `,
    },
    {
      dot: '······',
      html:
        `
      { <span class="string">'Feb 2022 - Now'</span>
      : <span class="string">'Front end developer at Communica Ltd' </span>}
      `,
    },
    {
      dot: '······',
      html:
        `
      { <span class="string">'Aug 2018 - Dec 2019'</span>
      : <span class="string">'Web Designer & Developer at UrbanVape Co' </span>}
      `,
    },
    {
      dot: '······',
      html:
        `
      { <span class="string">'Nov 2015 – Aug 2017'</span>
      : <span class="string">'Senior Web Designer at Supply Route.,LTD' </span>}
      `,
    },
    {
      dot: '····',
      html:
        `]`,
    },
    {
      dot: '··',
      html:
        `
        <span class="method">education</span>() {
        `,
    },
    {
      dot: '····',
      html:
        `
      <span class="return">return</span> [
      `,
    },
    {
      dot: '······',
      html:
        `
      { <span class="string">'Nov 2015 – Aug 2017'</span>
      : <span class="string">'Graduate diploma in IT (lv.7) from Aspire2
 International' </span>}
      `,
    },
    {
      dot: '······',
      html:
        `
      { <span class="string">'Sep 2017 - Jan 2018'</span>
      : <span class="string">'Web front end development bootcamp' </span>}
      `,
    },
    {
      dot: '······',
      html:
        `
      { <span class="string">'Feb 2007 - Feb 2012'</span>
      : <span class="string">'Bachelor of Design from Seoul National Science and Technology' </span>}
      `,
    },
    {
      dot: '····',
      html:
        `]`,
    },
    {
      dot: '··',
      html:
        `
        <span class="method">techSkills</span>() {
        `,
    },
    {
      dot: '····',
      html:
        `
      <span class="return">return</span> [
      `,
    },
    {
      dot: '······',
      html:
        `
      <span class="string">'HTML/HTML5', 'CSS/CSS3', 'Scss', 'less', 'jQuery', 'JavaScript', 'Git', 'Bootstrap', 'Gulp', 'Webpack', 'TypeScript', 'React.js', 'Node.js', 'Drupal', 'Docker', 'Storybook'</span>
      `,
    },
    {
      dot: '····',
      html:
        `]`,
    },
    {
      dot: '··',
      html:
        `
        <span class="method">techniquesMethodologies</span>() {
        `,
    },
    {
      dot: '····',
      html:
        `
      <span class="return">return</span> [
      `,
    },
    {
      dot: '······',
      html:
        `
      <span class="string">'Agile', 'Scrum', 'CI/CD', 'UI/UX', 'Responsive web design', 'Design mock-ups', 'Figma', 'Sketch', 'Photoshop', 'Illustrator', 'Youtrack'</span>
      `,
    },
    {
      dot: '····',
      html:
        `]`,
    },

  ];

  return (
    <div>
      <h1>About</h1>
      <div id="about" className="about page">
        <div className="row align-self-top w-100 align-items-start justify-content-center">
          <div className="pt-0 col-sm-9 col-md-9 offset-sm-2 col-10 offset-1 position-relative">
            <small className="section-title bullet-title alt">About /&gt;</small>
            <div className="code-view">
              <div className="mt-3">
                <div className="codes ps-3">

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
    </div>
  );
}
export default About;
