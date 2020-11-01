function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Persona amata</Text>}>
        <TextInput
          label="Nome"
          title="Nome: "
          settingsKey="nome"
          type="text" 
        />
        <TextInput
          label="Giorno"
          title="Giorno di conoscenza (aaa-mm-gg): "
          settingsKey="day"
          type="text" 
        />
      </Section>
      <Section
        title={<Text bold align="center">Primo animale</Text>}>
        <TextInput
          label="Nome"
          title="Nome: "
          settingsKey="nome1"
          type="text"
        />
        <TextInput
          label="Giorno"
          title="Giorno di conoscenza (aaa-mm-gg): "
          settingsKey="day1"
          type="text" 
        />
      </Section>
      <Section
        title={<Text bold align="center">Secondo animale</Text>}>
        <TextInput
          label="Nome"
          title="Nome:"
          settingsKey="nome2"
          type="text" 
        />
        <TextInput
          label="Giorno"
          title="Giorno di conoscenza (aaa-mm-gg): "
          settingsKey="day2"
          type="text" 
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
