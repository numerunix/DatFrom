function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Persona amata</Text>}>
        <TextInput
          label="Nome: "
          title="Nome0"
          settingsKey="nome"
          type="text" 
        />
        <TextInput
          label="Giorno di conoscenza (aaa-mm-gg): "
          title="Giorno0"
          settingsKey="day"
          type="text" 
        />
      </Section>
      <Section
        title={<Text bold align="center">Primo animale</Text>}>
        <TextInput
          label="Nome: "
          title="Nome1"
          settingsKey="nome1"
          type="text"
        />
        <TextInput
          label="Giorno di conoscenza (aaa-mm-gg): "
          title="Giorno1"
          settingsKey="day1"
          type="text" 
        />
      </Section>
      <Section
        title={<Text bold align="center">Secondo animale</Text>}>
        <TextInput
          label="Nome: "
          title="Nome2"
          settingsKey="nome2"
          type="text" 
        />
        <TextInput
          label="Giorno di conoscenza (aaa-mm-gg): "
          title="Giorno2"
          settingsKey="day2"
          type="text" 
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
