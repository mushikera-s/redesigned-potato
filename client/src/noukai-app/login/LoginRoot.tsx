import * as React from "react";
import { useNavigate } from "react-router-dom";
import Select, { SingleValue, GroupBase } from 'react-select';

interface Option {
    value: string;
    label: string;
}

interface State {
    name: string;
    deps: string;
}

// ご自由に変更してください。
const depsList: string[] = [
    "役員",
    "開発部",
    "その他",
];

const ChatRoot: React.FC = () => {
    const [state, setState] = React.useState<State>({ name: "", deps: "" });
    const navigate = useNavigate();

    const login = (): void => {
        if (state.name.trim() === '') return;
        console.log('Login called');  // デバッグ用ログ
        console.log(`Navigating to /noukai/${state.name}/${state.deps}`);  // デバッグ用ログ
        navigate(`/noukai/${state.name}/${state.deps}`);
    };

    const changeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(`Name changed: ${e.target.value}`);  // デバッグ用ログ
        setState({ ...state, name: e.target.value });
    };

    const changeDeps = (val: SingleValue<Option>) => {
        if (val) {
            console.log(`Deps changed: ${val.value}`);  // デバッグ用ログ
            setState({ ...state, deps: val.value });
        }
    };

    const options: Option[] = depsList.map((v: string) => { return { value: v, label: v } });

    console.log('Rendering component');  // デバッグ用ログ

    return (
        <div className="login container">
            <div className="row">
                <div className="panel panel-default col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                    <div className="panel-body">
                        <div className="form-group">
                            <Select<Option>
                                placeholder="事業部（検索できます）"
                                name="form-field-name"
                                value={options.find(option => option.value === state.deps)}
                                options={options}
                                onChange={changeDeps} />
                        </div>

                        <div className="form-group">
                            <input
                                onChange={changeName}
                                value={state.name}
                                className="form-control"
                                placeholder="おなまえ" />
                        </div>

                        <div className="text-center">
                            <button onClick={login} className="btn btn-warning">スタート</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatRoot;
