import React from 'react';
import {
  Container,
  Card,
  CardContent,
  Cell,
  CellIcon,
  TextBox,
  TextBoxTitle,
  TextBoxBigTitle,
  TextBoxSubTitle,
  TextBoxBiggerTitle,
  CellDisclosure,
  CellListItem,
} from '@sberdevices/plasma-ui';
import { IconDownload } from '@sberdevices/plasma-icons';
import '../../config/assistant'

const App = () => {
  return (
    <Container>
        <Card style={{ width: '20rem' }}>
            <CardContent compact>
                <Cell
                    content={<TextBoxBigTitle>Название раздела</TextBoxBigTitle>}
                    contentRight={<span style={{ marginTop: 5 }}>Detail</span>}
                />
                <Cell
                    contentLeft={
                        <CellIcon>
                            <IconDownload />
                        </CellIcon>
                    }
                    content={<TextBoxBiggerTitle>Value</TextBoxBiggerTitle>}
                    contentRight={
                        <CellIcon>
                            <IconDownload />
                        </CellIcon>
                    }
                    alignRight="center"
                />
                <TextBoxSubTitle>Description</TextBoxSubTitle>
            </CardContent>
        </Card>
    </Container>
  )
}
export default App;
