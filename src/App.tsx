import { Header, Notification } from '@aontas/design-system';

export default function App() {
  return (
    <>
      <Header type="h1">Hello, world!</Header>
      <Notification number={2} top="6" right="6">
        <button>Button with notification</button>
      </Notification>
    </>
  );
}
