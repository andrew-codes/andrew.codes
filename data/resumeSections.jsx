import React from "react";
import Typography from "material-ui/Typography";
import DatedResumeEntry from "../src/components/DatedResumeEntry/index";
import Link from "../src/components/Link";
import SimpleList from "../src/components/SimpleList/index";

const createSection = (heading, body) => ({
  body,
  heading
});

export default [
  createSection(
    "Profile Summary",
    <div>
      <Typography paragraph type="body1">
        As a craftsman, I am passionate about creating quality software and
        therefore am a strong subscriber to TDD and firmly believe in the
        emergent design of software architectures. Development is truly
        evolutionary; with its architecture reflecting less about the tools and
        more of the expression to its intent and usage.
      </Typography>
      <Typography paragraph type="body1">
        Although a student at heart, I also mentor others to aid them on their
        journey. I do this via presentations and workshops at various
        conferences and participate in mentoring programs, such as Pluralsight,
        one-one-one mentoring, and remote code pairing sessions.
      </Typography>
      <Typography paragraph type="body1">
        I am an active member of the OSS community and value OSS software
        projects. As a member and previous co-organizer of{" "}
        <Link to="https://www.meetup.com/React-ATL">ReactATL</Link>, I encourage
        others to participate and aim to make software development more
        accessible to a larger audience.
      </Typography>
      <Typography paragraph type="body1">
        {" "}
        Being a lifelong learner, I am in constant pursuit of improvement in all
        things I do. My goal is to always be better today than yesterday and
        rise to challenges of tomorrow.
      </Typography>
    </div>
  ),
  createSection(
    "Proficiencies Overview",
    <div>
      <section
        style={{
          marginBottom: "8px"
        }}
      >
        <Typography type="title">Technologies</Typography>
        <SimpleList
          items={[
            "JavaScript, ECMAScript 2015",
            "React ecosystem and jsx",
            "nodejs, npm, yarn",
            "C#, .NET",
            "git, bash, CLI",

            "SQL, SQL Server"
          ]}
        />
      </section>
      <section
        style={{
          marginBottom: "8px"
        }}
      >
        <Typography type="title">Skills</Typography>
        <SimpleList
          items={[
            "Architectural patterns (IoC, emergent design)",
            "TDD, BDD, test automation, complex test setup configurations",
            "Flux and FRP patterns, MVC, MVP, MVVM",
            "XP, Scrum and Kanban agile environments",
            "Presentation delivery and training"
          ]}
        />
      </section>
      <section
        style={{
          marginBottom: "8px"
        }}
      >
        <Typography type="title">Frameworks</Typography>
        <SimpleList
          items={[
            "React, React Native",
            "Redux, sagas, scaling redux",
            "Jest, mocha, chai, sinon",
            "Webpack, babel, gulp",
            "nUnit, machine.specifications",
            "StructureMap"
          ]}
        />
      </section>
    </div>
  ),
  createSection(
    "Experience",
    <div>
      <DatedResumeEntry
        name="smash.gg"
        from="2018"
        title="Senior Software Engineer"
        description="Work with teams to enable and deliver features for smash.gg; primary focus while there was enabling unit testing on the front-end and nodejs back-end."
        details={[
          "Introduced unit testing for front-end and back-end nodejs via Jest"
        ]}
        environment={[
          "React, Redux, GraphQL, Apollo",
          "Jest, mocha, Enzyme",
          "git, GitHub, bash",
          "PHP, Google Cloud Computing",
          "Scrum"
        ]}
      />
      <DatedResumeEntry
        name="VersionOne"
        from="2014"
        to="2018"
        title="Senior Software Engineer"
        description="Work within team to deliver new features for flagship product, LifeCycle; developing both C# back-end and ECMAScript 2015 front-end."
        details={[
          "Introduced React and Redux stack; now used across all dev teams for every new feature",
          "Provided on-going guidance for best practices with React / Redux features",
          "Spearheaded effort to migrate all JavaScript from custom modules to ES2015 modules",
          "Introduced and configured webpack, babel, and component level testing",
          "Enabled WallabyJS test runner",
          "Creator of VersionOne's component library",
          "Integral player in creation of VersionOne's design language"
        ]}
        environment={[
          "React, Redux, ECMAScript 2015, mocha, Enzyme, Storybook, webpack",
          "C#, .NET, MVC.NET, nUnit",
          "git, GitHub, bash",
          "CSS, LESS",
          "nodejs",
          "XP (pair programming), kanban",
          "SQL Server"
        ]}
      />
      <DatedResumeEntry
        name="Pluralsight hack.hands()"
        from="2017"
        title="Mentor"
        description="One-on-one remote mentoring and code-pairing sessions on various JavaScript, React, Redux and C# topics."
      />
      <DatedResumeEntry
        name="MATRIX Resources, Professional Services"
        from="2013"
        to="2014"
        title="Senior Software Engineer"
        description="Software engineering consultant in Professional Services; a full-time division of MATRIX providing a dedicated team to deliver application solutions, instead of developers, to their clients."
        details={[
          "Pioneered craftsmanship fellowship program",
          "Mentored apprentice developers",
          "Provided training on TDD and BDD",
          "Integral role in developing UI standards between UX and dev"
        ]}
        environment={[
          "C#, .NET, MVC.NET, Web API",
          "React, JavaScript, Durandal, jQuery",
          "CSS, LESS, SASS",
          "git, git-tfs",
          "SQL Server",
          "Scrum"
        ]}
      />
      <DatedResumeEntry
        name="M*Modal"
        from="2012"
        to="2013"
        title="Software Engineer"
        description="Worked with team of developers on Fluency for Coding; a medical billing web application."
        details={["Pioneered unit testing"]}
        environment={[
          "C#, .NET, MVC.NET, WCF",
          "JavaScript, Knockout, KendoUI, jQuery",
          "CSS, LESS",
          "Mercurial",
          "SQL Server"
        ]}
      />
      <DatedResumeEntry
        name="Response Mine Interactive"
        from="2012"
        to="2012"
        title="Web Application Developer"
        description="Worked with team to develop desktop and mobile sites and was lead on internal CMS tool to roll out across all sites."
        environment={[
          "C#, .NET, MVC.NET",
          "JavaScript, jQuery, jQuery mobile",
          "CSS, LESS",
          "Subversion, git-svn",
          "SQL Server"
        ]}
      />
      <DatedResumeEntry
        name="Daxko"
        from="2011"
        to="2012"
        title="Senior .Net Engineer"
        description="Worked with a cross-functional team to deliver operational and membership management software for progressive nonprofits."
        details={["Enabled MVC.NET with existing legacy ASP.NET Webforms"]}
        environment={[
          "C#, .NET, MVC.NET, Webforms",
          "JavaScript, jQuery",
          "CSS, LESS",
          "git, GitHub",
          "SQL Server",
          "Scrum",
          "Ruby"
        ]}
      />
      <DatedResumeEntry
        name="MedSEEK"
        from="2011"
        to="2011"
        title="Software Engineer"
        description="Worked with team to deliver Coldstone; an e-healthcare platform and ecosystem."
        details={["Integral role in developing UI standards"]}
        environment={[
          "C#, .NET",
          "JavaScript, jQuery",
          "CSS",
          "Subversion",
          "SQL Server",
          "Scrum"
        ]}
      />
      <DatedResumeEntry
        name="Intermark Group"
        from="2010"
        to="2011"
        title="Software Engineer 3"
        description="Worked with team on BuyAToyota.com; a nationally recognized website handling Toyota’s 3rd tier marketing and online presence."
        details={["Integral role in developing UI standards"]}
        environment={[
          "C#, .NET, MVP",
          "JavaScript, jQuery",
          "CSS",
          "Subversion",
          "SQL Server",
          "Scrum"
        ]}
      />
      <DatedResumeEntry
        name="Columbus Technical College"
        from="2009"
        to="2010"
        title="Adjunct Faculty"
        description="Taught web development and general computing courses, as well as work closely with local businesses to aid in the development of the curriculum."
        environment={["HTML, CSS", "JavaScript", "Computer hardware"]}
      />
      <DatedResumeEntry
        name="Meranko"
        from="2005"
        to="2009"
        title="Owner, Lead Consultant"
        description="Successfully operated small consulting firm to provide development and IT consulting services to the Columbus, GA and surrounding area."
        environment={[
          "C#, .NET, MVP",
          "JavaScript, jQuery",
          "Subversion",
          "SQL Server"
        ]}
      />
    </div>
  ),
  createSection(
    "Community Involvement",
    <div>
      <DatedResumeEntry
        name={
          <span>
            <Link to="https://www.meetup.com/React-ATL">ReactATL</Link> Meetup
            Co-organizer
          </span>
        }
        from="2015"
        description="Co-organize the ReactATL meetup group in Atlanta and am an active community leader."
      />
      <DatedResumeEntry
        timespan={false}
        name={
          <Link to="http://jas.link/building-redux-connecttech-2017">
            Building Redux Workshop
          </Link>
        }
        from="2017"
        description="Full day workshop at Connect.Tech 2017 on learning Redux by building the library itself. Focus on building Redux, middleware application mechanism, redux-thunk middleware, and react-redux package."
      />
      <DatedResumeEntry
        timespan={false}
        name="Hands-on React Workshop"
        from="2016"
        description="Full day workshop given at Connect.Tech 2016 on React; ranging from beginner to advanced topics."
      />
      <DatedResumeEntry
        timespan={false}
        name={
          <Link to="http://jas.link/lets-talk-flux">Let's Talk about Flux</Link>
        }
        from="2015"
        description="Presentation at Connect.Tech 2015 on motivations behind Flux pattern and comparing/contrasting against MV* patterns."
      />
      <DatedResumeEntry
        timespan={false}
        name={
          <Link to="http://jas.link/react-relay-graphql-talk">
            GraphQL, Relay and React
          </Link>
        }
        from="2015"
        description="Currently in the top 5 search results on Youtube when searching 'graphql relay', this presentation is an introduction to GraphQL and Relay and also discusses the motivations behind the technologies. Presented at the meetup, Developers of Athens."
      />
      <DatedResumeEntry
        timespan={false}
        name={
          <Link to="http://jas.link/lets-talk-flux">Let's Talk about Flux</Link>
        }
        from="2015"
        description="Presentation given to local JavaScript ATL meetup group."
      />
    </div>
  ),
  createSection(
    "Education",
    <div>
      <DatedResumeEntry
        timespan={false}
        name="Develop with Passion"
        from="2012"
        title="Software Craftsmanship"
        description={
          <span>
            Week long boot camp on software craftsmanship with{" "}
            <Link to="https://github.com/developwithpassion">
              Jean-Paul Boodhoo
            </Link>
          </span>
        }
      />
      <DatedResumeEntry
        timespan={false}
        name="Columbus State University"
        from="2009"
        title="Bachelor of Science, Computer Science"
        description="Completion of undergraduate and some graduate degree course work."
      />
    </div>
  )
].map(section => ({
  ...section,
  slug: section.heading.replace(" ", "-")
}));
