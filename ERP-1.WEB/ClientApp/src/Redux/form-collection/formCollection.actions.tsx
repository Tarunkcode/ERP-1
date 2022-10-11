export const setFormDataCollection = (data: any) => ({
    type: "AddOnFormData",
    payload: data.field,
    key: data.key,
    label: data.label
});
