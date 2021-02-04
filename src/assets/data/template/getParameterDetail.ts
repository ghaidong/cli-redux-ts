var data = { "data": { "getParameterDetail": { "Error": "0", "Result": [{ "ParaName": "Modbus地址", "ParaCategory": 1, "Abbreviation": "Address", "Unit": "", "Ratio": "", "ParaDataType": "UINT", "ParaType": 0, "RegisterAddress": "12400", "RegisterLength": "1", "Range": "1~99", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "断路器极数", "ParaCategory": 1, "Abbreviation": "Pole", "Unit": "", "Ratio": "", "ParaDataType": "UINT", "ParaType": 0, "RegisterAddress": "8750", "RegisterLength": "1", "Range": "0=3极,1=4极", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "额定电流", "ParaCategory": 1, "Abbreviation": "In", "Unit": "ABAb", "Ratio": "", "ParaDataType": "UINT", "ParaType": 0, "RegisterAddress": "8749", "RegisterLength": "1", "Range": "0~8000", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "额定电压", "ParaCategory": 1, "Abbreviation": "Un", "Unit": "", "Ratio": "", "ParaDataType": "UINT", "ParaType": 0, "RegisterAddress": "9615", "RegisterLength": "1", "Range": "0~65535", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "设备代码", "ParaCategory": 1, "Abbreviation": "NAME", "Unit": "", "Ratio": "", "ParaDataType": "STRING", "ParaType": 0, "RegisterAddress": "11800", "RegisterLength": "23", "Range": "", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "生产日期", "ParaCategory": 1, "Abbreviation": "Production_data", "Unit": "", "Ratio": "", "ParaDataType": "STRING", "ParaType": 0, "RegisterAddress": "", "RegisterLength": "", "Range": "", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "脱扣单元保护类型", "ParaCategory": 1, "Abbreviation": "Mic_type_P", "Unit": "", "Ratio": "", "ParaDataType": "STRING", "ParaType": 0, "RegisterAddress": "8739", "RegisterLength": "1", "Range": "52=Micrologic5.2,62=Micrologic6.2,72=Micrologic7.2,53=Micrologic5.3,63=Micrologic6.3,73=Micrologic7.3", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "脱扣单元测量类型", "ParaCategory": 1, "Abbreviation": "Mic_type_M", "Unit": "", "Ratio": "", "ParaDataType": "STRING", "ParaType": 0, "RegisterAddress": "8740", "RegisterLength": "1", "Range": "0x2041~0x204D", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "脱扣单元类型", "ParaCategory": 1, "Abbreviation": "Mic_type", "Unit": "", "Ratio": "", "ParaDataType": "STRING", "ParaType": 0, "RegisterAddress": "", "RegisterLength": "", "Range": "", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "序列号", "ParaCategory": 1, "Abbreviation": "Serial_NO", "Unit": "", "Ratio": "", "ParaDataType": "STRING", "ParaType": 0, "RegisterAddress": "8699", "RegisterLength": "6", "Range": "", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "电流 A", "ParaCategory": 2, "Abbreviation": "Ia", "Unit": "A", "Ratio": "", "ParaDataType": "UINT", "ParaType": 1, "RegisterAddress": "1015", "RegisterLength": "1", "Range": "0~65535", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "电流 B", "ParaCategory": 2, "Abbreviation": "Ib", "Unit": "A", "Ratio": "", "ParaDataType": "UINT", "ParaType": 1, "RegisterAddress": "1016", "RegisterLength": "1", "Range": "0~65535", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "电流 C", "ParaCategory": 2, "Abbreviation": "Ic", "Unit": "A", "Ratio": "", "ParaDataType": "UINT", "ParaType": 1, "RegisterAddress": "1017", "RegisterLength": "1", "Range": "0~65535", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "电流 N", "ParaCategory": 2, "Abbreviation": "Io", "Unit": "A", "Ratio": "", "ParaDataType": "UINT", "ParaType": 1, "RegisterAddress": "1018", "RegisterLength": "1", "Range": "0~65535", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "三相最大电流", "ParaCategory": 2, "Abbreviation": "Imax", "Unit": "A", "Ratio": "", "ParaDataType": "UINT", "ParaType": 1, "RegisterAddress": "1019", "RegisterLength": "1", "Range": "0~65535", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "短延时保护电流（Isd）", "ParaCategory": 3, "Abbreviation": "Isd", "Unit": "A", "Ratio": "", "ParaDataType": "UINT", "ParaType": 0, "RegisterAddress": "8766", "RegisterLength": "1", "Range": "0~65535", "Remark": "Datatype:FunCode=03,StartReg=8763,Len=10;other:;", "__typename": "ParameterList" }, { "ParaName": "短延时保护延时（tsd）", "ParaCategory": 3, "Abbreviation": "Tsd", "Unit": "s", "Ratio": "1000", "ParaDataType": "UINT", "ParaType": 0, "RegisterAddress": "8767", "RegisterLength": "1", "Range": "0~400", "Remark": "Datatype:FunCode=03,StartReg=8763,Len=10;other:;", "__typename": "ParameterList" }, { "ParaName": "接地故障保护电流（Ig）", "ParaCategory": 3, "Abbreviation": "Ig", "Unit": "A", "Ratio": "", "ParaDataType": "UINT", "ParaType": 0, "RegisterAddress": "8786", "RegisterLength": "1", "Range": "0~65535", "Remark": "Datatype:FunCode=03,StartReg=8783,Len=10;other:;", "__typename": "ParameterList" }, { "ParaName": "接地故障保护延时（tg）", "ParaCategory": 3, "Abbreviation": "Tg", "Unit": "s", "Ratio": "1000", "ParaDataType": "UINT", "ParaType": 0, "RegisterAddress": "8787", "RegisterLength": "2", "Range": "0~400", "Remark": "Datatype:FunCode=03,StartReg=8783,Len=10;other:;", "__typename": "ParameterList" }, { "ParaName": "瞬时保护电流（Ii）", "ParaCategory": 3, "Abbreviation": "Ii", "Unit": "A", "Ratio": "", "ParaDataType": "UINT", "ParaType": 0, "RegisterAddress": "8776", "RegisterLength": "1", "Range": "0~65535", "Remark": "Datatype:FunCode=03,StartReg=8773,Len=10;other:;", "__typename": "ParameterList" }, { "ParaName": "长延时保护电流（Ir）", "ParaCategory": 3, "Abbreviation": "Ir", "Unit": "A", "Ratio": "", "ParaDataType": "UINT", "ParaType": 0, "RegisterAddress": "8755", "RegisterLength": "1", "Range": "0~65535", "Remark": "Datatype:FunCode=03,StartReg=8753,Len=10;other:;", "__typename": "ParameterList" }, { "ParaName": "长延时保护延时（tr）", "ParaCategory": 3, "Abbreviation": "tr", "Unit": "s", "Ratio": "1000", "ParaDataType": "UINT", "ParaType": 0, "RegisterAddress": "8757", "RegisterLength": "1", "Range": "0~16000", "Remark": "Datatype:FunCode=03,StartReg=8753,Len=10;other:;", "__typename": "ParameterList" }, { "ParaName": "写入设备代码", "ParaCategory": 4, "Abbreviation": "W_NAME", "Unit": "", "Ratio": "", "ParaDataType": "STRING", "ParaType": 0, "RegisterAddress": "11800", "RegisterLength": "23", "Range": "", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "触头磨损率", "ParaCategory": 5, "Abbreviation": "WearRate", "Unit": "%", "Ratio": "", "ParaDataType": "INT64", "ParaType": 0, "RegisterAddress": "29852", "RegisterLength": "1", "Range": "0~32766", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "断路器状态", "ParaCategory": 5, "Abbreviation": "CB_OFS", "Unit": "", "Ratio": "", "ParaDataType": "INT64", "ParaType": 0, "RegisterAddress": "562", "RegisterLength": "1", "Range": "0=断开,1=闭合,2=脱扣,4=脱扣,6=脱扣", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "分合闸次数", "ParaCategory": 5, "Abbreviation": "CB_OF_counter", "Unit": "次", "Ratio": "", "ParaDataType": "INT32", "ParaType": 0, "RegisterAddress": "570", "RegisterLength": "2", "Range": "0~4294967295", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "负载率运行时间（0-49%）", "ParaCategory": 5, "Abbreviation": "Runhour_49%In", "Unit": "小时", "Ratio": "", "ParaDataType": "INT32", "ParaType": 0, "RegisterAddress": "29879", "RegisterLength": "2", "Range": "0~4294967295", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "负载率运行时间（50-79%）", "ParaCategory": 5, "Abbreviation": "Runhour_79%In", "Unit": "小时", "Ratio": "", "ParaDataType": "INT32", "ParaType": 0, "RegisterAddress": "29881", "RegisterLength": "2", "Range": "0~4294967295", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "负载率运行时间（80-89%）", "ParaCategory": 5, "Abbreviation": "Runhour_89%In", "Unit": "小时", "Ratio": "", "ParaDataType": "INT32", "ParaType": 0, "RegisterAddress": "29883", "RegisterLength": "2", "Range": "0~4294967295", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "负载率运行时间（90-100%）", "ParaCategory": 5, "Abbreviation": "Runhour_100%In", "Unit": "小时", "Ratio": "", "ParaDataType": "INT32", "ParaType": 0, "RegisterAddress": "29885", "RegisterLength": "2", "Range": "0~4294967295", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "故障跳闸次数", "ParaCategory": 5, "Abbreviation": "CB_SDE_counter", "Unit": "次", "Ratio": "", "ParaDataType": "INT64", "ParaType": 0, "RegisterAddress": "574", "RegisterLength": "1", "Range": "0~65535", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "短延时脱扣（Isd）", "ParaCategory": 6, "Abbreviation": "CB_Isd_Alm", "Unit": "正常/脱扣", "Ratio": "", "ParaDataType": "BOOL", "ParaType": 0, "RegisterAddress": "9999.1", "RegisterLength": "", "Range": "", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "故障跳闸（SDE）", "ParaCategory": 6, "Abbreviation": "CB_SDE_Alm", "Unit": "正常/脱扣", "Ratio": "", "ParaDataType": "BOOL", "ParaType": 0, "RegisterAddress": "562.2", "RegisterLength": "", "Range": "", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "集成瞬时脱扣", "ParaCategory": 6, "Abbreviation": "CB_Inted_Alm", "Unit": "正常/脱扣", "Ratio": "", "ParaDataType": "BOOL", "ParaType": 0, "RegisterAddress": "9999.5", "RegisterLength": "", "Range": "", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "接地故障（Ig）", "ParaCategory": 6, "Abbreviation": "CB_Ig_Alm", "Unit": "正常/脱扣", "Ratio": "", "ParaDataType": "BOOL", "ParaType": 0, "RegisterAddress": "9999.3", "RegisterLength": "", "Range": "", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "漏电保护（Vigi）", "ParaCategory": 6, "Abbreviation": "CB_Vigi_Alm", "Unit": "正常/脱扣", "Ratio": "", "ParaDataType": "BOOL", "ParaType": 0, "RegisterAddress": "9999.4", "RegisterLength": "", "Range": "", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "瞬动脱扣（Ii）", "ParaCategory": 6, "Abbreviation": "CB_Ii_Alm", "Unit": "正常/脱扣", "Ratio": "", "ParaDataType": "BOOL", "ParaType": 0, "RegisterAddress": "9999.2", "RegisterLength": "", "Range": "", "Remark": "other:;", "__typename": "ParameterList" }, { "ParaName": "长延时脱扣（Ir）", "ParaCategory": 6, "Abbreviation": "CB_Ir_Alm", "Unit": "正常/脱扣", "Ratio": "", "ParaDataType": "BOOL", "ParaType": 0, "RegisterAddress": "9999.0", "RegisterLength": "", "Range": "", "Remark": "other:;", "__typename": "ParameterList" }], "__typename": "ParameterListResponse" } } }
export default data