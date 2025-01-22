import PropTypes from "prop-types";

export default function Section({ children, SectionContainer, ...props }) {
  return <SectionContainer {...props}>{children}</SectionContainer>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  SectionContainer: PropTypes.elementType.isRequired,
};
