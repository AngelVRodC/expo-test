import React, { useReducer, useState } from 'react';
import { BaseLayout } from '../../templates/main-page/index';
import { Content, Button, Form, Grid, Item, Label, Input, Row, Text, Toast } from 'native-base';
import Loader from '../../molecules/loader/index';
import { createUser } from '../../../@shared/store/users/actions';
import { useDispatch } from 'react-redux';
import { setLoaderStatus } from '../../../@shared/store/status/actions';


const initialState: CreateUserRequest= {
  name: '',
  job: ''
}

// TODO: split components in Atoms
const CreateUserForm = () =>{
  const [user, setUserState] = useState(initialState);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
      dispatch(setLoaderStatus(true));
      await createUser(user);
      dispatch(setLoaderStatus(false));
      Toast.show({  text: 'Se creo el usuario correctamente'});
  }

  const onInputChange = (field: string, value: string) => {
    const newState = {
      ...user,
      [field]: value
    }
    setUserState(newState)
  }

  return (
    <Content>
      <Form >
        <Grid style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', marginTop: 50}}>
          <Row>
            <Item stackedLabel>
              <Label>Nombre</Label>
                <Input value={user.name} onChangeText={(text: string) => onInputChange('name',text)}/>
            </Item>
          </Row>
          <Row>
            <Item stackedLabel>
              <Label>Trabajo</Label>
              <Input value={user.job} onChangeText={(text: string) => onInputChange('job',text)}/>
            </Item>
          </Row>
          <Row style={{ marginTop: 50}}>
            <Button  rounded onPress={() => handleSubmit()}>
              <Text uppercase={false}>Crear Usuario</Text>
            </Button>
          </Row>
        </Grid>
      </Form>
    </Content>
  )
}

const CreateUser = () => {

  return <BaseLayout title={'Crear Usuario'} content={<CreateUserForm/>} />;
};

export default CreateUser;