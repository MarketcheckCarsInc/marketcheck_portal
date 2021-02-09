import Section from './Section'
import Link from './Link'

export default ({
  section,
  links
}) =>
  <div>
    <Section>{ section }</Section>
    { links.map((l, index) =>
      <Link
        key={index + l.name}
        href={l.link}
        title={l.name}
      >
        {l.name}
      </Link>
    ) }
  </div>
