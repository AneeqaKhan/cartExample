import AsyncStorage from '@react-native-community/async-storage';

export async function setValue(sKey, value) {
    try {
        if (sKey == null || sKey == '')
            return false;
        const sValue = JSON.stringify(value);
        await AsyncStorage.setItem(sKey, sValue);
        return true;
    } catch (sError) {
        console.log(`Storage setValue >> Key:${sKey} Value: ${sValue} Error: ${sError}`);
        return false;
    }
}

export async function getValue(sKey) {
    try {
        if (sKey == null || sKey == '')
            return '';
        const sValue = await AsyncStorage.getItem(sKey);
        return JSON.parse(sValue);
    } catch (sError) {
        console.log(`Storage getValue >> Key: ${sKey} Error: ${sError}`);
        return '';
    }
}

export async function removeItemValue(sKey) {
    try {
        if (sKey == null || sKey == '')
            return false;
        await AsyncStorage.removeItem(key);
        return true;
    } catch (sError) {
        console.log(`Storage removeItemValue >> Key: ${sKey} Error: ${sError}`);
        return false;
    }
}

export async function clearValues() {
    try {
        await AsyncStorage.clear();
        return true;
    } catch (sError) {
        console.log(`Storage clearValues >> Error: ${sError}`);
        return false;
    }
}