import { Header, Notification } from '@aontas/design-system';

export default function App() {
  return (
    <>
      <Header type="h1">Hello, world!</Header>;
      <Notification number={2}>
        <Header type="h2">Header with notification</Header>
      </Notification>
    </>
  );
}
