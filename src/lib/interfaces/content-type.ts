interface Field {
  id: string
  newId?: string
  name?: string
  type?: string
  linkType?: string
  items?: {
    type: string
    linkType?: string
    validations?: any[]
  }
  omitted?: boolean
  deleted?: boolean
  localized?: boolean
  required?: boolean
  validations?: any[]
  disabled?: boolean
}

interface APIContentType {
  sys: {
    id: string,
    version: number
  },
  fields: Field[],
  name: string,
  description?: string,
  displayField?: string
}

interface APIEditorInterfaceSettings {
  helpText?: string,
  trueLabel?: string,
  falseLabel?: string,
  bulkEditing?: boolean,
  stars?: number,
  format?: string,
  ampm?: string
}

type APIWidgetNamespace = 'builtin' | 'extension'

interface APIEditorInterfaceControl {
  fieldId: string,
  widgetId?: string,
  widgetNamespace?: APIWidgetNamespace,
  settings?: APIEditorInterfaceSettings
}

interface APISidebarWidgetSettings {
  [key: string]: any
}

interface APIEditorInterfaceSidebar {
  widgetId: string,
  widgetNamespace: APIWidgetNamespace,
  disabled?: boolean,
  settings?: APISidebarWidgetSettings
}

interface APIEditorIntefaceEditor {
  widgetId: string,
  widgetNamespace: APIWidgetNamespace,
  settings?: { [key: string]: any }
}

interface APIEditorInterfaces {
  sys: {
    version: number
  },
  controls: APIEditorInterfaceControl[],
  sidebar?: APIEditorInterfaceSidebar[],
  editor?: APIEditorIntefaceEditor
}

export {
  APIContentType as default,
  APIContentType,
  Field,
  APIEditorInterfaces,
  APIEditorInterfaceControl,
  APIEditorInterfaceSettings,
  APIEditorInterfaceSidebar,
  APIEditorIntefaceEditor,
  APISidebarWidgetSettings,
  APIWidgetNamespace
}
