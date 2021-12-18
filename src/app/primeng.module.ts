import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { ChipModule } from 'primeng/chip';
import { ListboxModule } from 'primeng/listbox';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MenuModule } from 'primeng/menu';
import { ChipsModule } from 'primeng/chips';
import { MessagesModule } from 'primeng/messages';
import { PickListModule } from 'primeng/picklist';
import { FlexModule } from '@angular/flex-layout';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { PasswordModule } from 'primeng/password';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToolbarModule } from 'primeng/toolbar';
import { TagModule } from 'primeng/tag';
import {TabMenuModule} from 'primeng/tabmenu';


const PRIMENG_MODULES = [
  InputSwitchModule,
  TabViewModule,
  CheckboxModule,
  TableModule,
  SelectButtonModule,
  ButtonModule,
  RadioButtonModule,
  DropdownModule,
  CheckboxModule,
  MultiSelectModule,
  TagModule,
  ProgressSpinnerModule,
  ScrollPanelModule,
  FieldsetModule,
  InputTextModule,
  AvatarModule,
  DividerModule,
  DialogModule,
  ToastModule,
  ChipModule,
  ChipsModule,
  InputNumberModule,
  ListboxModule,
  DynamicDialogModule,
  ListboxModule,
  MessagesModule,
  MessageModule,
  MenuModule,
  PickListModule,
  FlexModule,
  ToolbarModule,
  TooltipModule,
  TreeModule,
  PasswordModule,
  ConfirmDialogModule,
  FileUploadModule,
  TabMenuModule
];

@NgModule({
  declarations: [],
  imports: [
    PRIMENG_MODULES
  ],
  exports: [
    PRIMENG_MODULES
  ]
})
export class PrimengModule { }
