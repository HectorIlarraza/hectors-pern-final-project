import { Grommet as GrommetIcon, Github, Slack, Linkedin } from 'grommet-icons';
import { Anchor, Box, Footer, grommet, Grommet, Text } from 'grommet';

const Media = () => (
    <Box direction="row" gap="xxsmall" justify="center">
      <Anchor
        a11yTitle="Share feedback on Github"
        href="https://github.com/HectorIlarraza"
        icon={<Github color="brand" />}
      />
      <Anchor
        a11yTitle="Chat with us on Slack"
        href="https://acmeco.slack.com/team/U023ME0KBCM"
        icon={<Slack color="#6FFFB0" />}
      />
      <Anchor
        a11yTitle="Chat with us on Slack"
        href="https://www.linkedin.com/in/hectorilarraza/"
        icon={<Linkedin color="brand" />}
      />
    </Box>
  );
  
  export const Social = () => (
      <Grommet theme={grommet}>
          <Footer background="dark-1" pad="small">
              <Box align="center" direction="row" gap="xsmall">
                <GrommetIcon color="brand" size="medium" />
                <Text alignSelf="center" color="#6FFFB0" size="small">
                  <strong>A Hector Ilarraza Site</strong>
                </Text>
              </Box>
              <Media />
              <Text textAlign="center" size="xsmall" color="#6FFFB0">
                <strong>©Copyright</strong>
              </Text>
            </Footer>
      </Grommet>
);