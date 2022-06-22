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
        title={<Text bold align="center">Seconda Persona</Text>}>
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
        title={<Text bold align="center">Terza persona</Text>}>
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
      {<Text bold align="center">Creato da Giulio Sorrentino</Text>}
      {<Text bold align="center">Dedicato a Francesca Milano</Text>}
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);
