export const changeConfigData = (data: any) => ({
    type: "changeConfig",
    payload: data.field,
    key: data.key,
    label: data.label
});
