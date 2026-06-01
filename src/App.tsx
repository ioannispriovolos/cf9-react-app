//import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
//import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
// import Layout from "./components/Layout.tsx";
// import Counter from "./components/LessonFour/Counter.tsx"
// import ClassCounter from "./components/LessonFour/ClassCounter.tsx";
// import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";
// import Namechanger from "./components/LessonFive/NameChanger.tsx";
// import CounterWithCustomHook from "./components/LessonFive/CounterWithCustomHook.tsx";
// import {useEffect} from "react";
// import NameChangerWithTitle from "./components/LessonFive/NameChangerWithTitle.tsx";
// import AutoRedirect from "./components/LessonSix/AutoRedirect.tsx";
// import AutoRedirectAdvanced from "./components/LessonSix/AutoRedirectAdvanced.tsx";
// import WindowSize from "./components/LessonSix/WindowSize.tsx";
// import FocusInput from "./components/LessonSix/FocusInput.tsx";
// import PreviousValue from "./components/LessonSix/PreviousValue.tsx";
import {Route, Routes} from "react-router";
// import NameChanger from "./components/LessonFive/NameChanger.tsx";
import HomePage from "./pages/HomePage.tsx";
// import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";
// import Counter from "./components/LessonFour/Counter.tsx";
// import Footer from "./components/Footer.tsx";
// import Layout from "./components/Layout.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import UserPage from "./pages/UserPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import MultifieldForm from "./components/LessonNine/MultifieldForm.tsx";
import MultiFieldFormWithValidation from "./components/LessonNine/MultiFieldFormWithValidation.tsx";
import MultiFieldFormWithZod from "./components/LessonTen/MultiFieldFormWithZod.tsx";
import MultiFieldFormWithHookForm from "./components/LessonTen/MultiFieldFormWithHookForm.tsx";
// import {useEffect} from "react";


// type PropsA = {
//     title: string;
//     description: string;
// }
//
// type PropsB = {
//     title: string;
//     description: string;
// }
//
// // UNION
// type Status = "Error" | "Info" | "Warning";
//
// // Tuples
// type Coordinates = [number, number];
//
// // Functions
// type ClickHandler = (event: MouseEvent) => void;
//
// // Intersection
// type Props = PropsA & PropsB;
//
// interface PropsTwo {
//     title: string;
//     description: string;
// }
//
// interface PropsTwo {
//     price: number;
//     sort: number;
// }
//
// // PropsTwo = {title, description, price, sort}
//
// interface PropsThree extends PropsTwo {
//     image: string;
// }
//
// // PropsThree = {title, description, price, sort, image}
//
// function setup() {
//     alert("count")
// }

function App() {

    // useEffect(() => {
    //     history.pushState({}, "", "/about");
    // }, []);

    return (
        <>
            {/*<FunctionalComponent />*/}
            {/*<FunctionalComponent />*/}
            {/*<FunctionalComponent />*/}
            {/*<FunctionalComponent />*/}
            {/*<ClassComponent />*/}
            {/*<ArrowFunctionalComponent />*/}
            {/*<ArrowFunctionalComponentWithProps title="Heading 1"/>*/}
            {/*<ArrowFunctionalComponentWithProps title="Second Title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur deserunt distinctio dolores quae repellat suscipit tenetur velit voluptate. Cupiditate dolores modi nostrum repellendus totam. Dolorum eius eum nihil placeat sint. At autem et ex exercitationem explicabo facere fuga in maxime minus possimus quam qui quia sint vero vitae, voluptatum!" />*/}

            {/*<Layout addClasses="bg-gray-50">*/}
            {/*    /!*<ArrowFunctionalComponentWithProps title="Second Title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur deserunt distinctio dolores quae repellat suscipit tenetur velit voluptate. Cupiditate dolores modi nostrum repellendus totam. Dolorum eius eum nihil placeat sint. At autem et ex exercitationem explicabo facere fuga in maxime minus possimus quam qui quia sint vero vitae, voluptatum!" />*!/*/}
            {/*    /!*<p className="text-red-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aperiam at consequuntur, debitis doloribus fugiat fugit harum illum libero maiores necessitatibus non nostrum perferendis quasi quibusdam quos rerum vitae?</p>*!/*/}
            {/*    /!*<Counter/>*!/*/}
            {/*    /!*<ClassCounter/>*!/*/}
            {/*    /!*<CounterAdvanced />*!/*/}
            {/*    /!*<Namechanger/>*!/*/}
            {/*    /!*<CounterWithCustomHook/>*!/*/}
            {/*    <NameChangerWithTitle/>*/}
            {/*</Layout>*/}

            {/*  Lesson Six  */}

            {/*<Layout addClasses="bg-gray-50">*/}
            {/*    /!*<AutoRedirect/>*!/*/}
            {/*    /!*<AutoRedirectAdvanced/>*!/*/}
            {/*    /!*<WindowSize/>*!/*/}
            {/*    /!*<FocusInput/>*!/*/}
            {/*    <PreviousValue/>*/}
            {/*</Layout>*/}

            {/*  Lesson Seven  */}
            <Routes>
                <Route element={<RouterLayout />}>
                    <Route index element={<HomePage />} />

                    {/*<Route path="examples?">*/}
                {/*    <Route path="examples">*/}
                {/*        <Route index element={<NameChanger />} />*/}
                {/*        <Route path="name-changer" element={<NameChanger />} />*/}
                {/*        <Route path="counter" element={<Counter />} />*/}
                {/*        <Route path="counter-advanced" element={<CounterAdvanced />} />*/}
                {/*    </Route>*/}
                {/*</Route>*/}


                    <Route path="users">
                        {/*<Route index element={<UserListPage />} />*/}
                        <Route path=":userId" element={<UserPage />} />
                    </Route>


                    <Route path="search" element={<SearchPage />} />

                    <Route path="multifield-form" element={<MultifieldForm />} />
                    <Route path="multifield-form-validation" element={<MultiFieldFormWithValidation />} />
                    <Route path="multifield-form-zod" element={<MultiFieldFormWithZod />} />
                    <Route path="multifield-form-with-hook" element={<MultiFieldFormWithHookForm />} />

                </Route>
                {/*<Route path="files/*" element={<File />} />*/}

                {/*let params = useParams();*/}
                {/*let filepath = params["*"]*/}

                {/*<Route path="*" element={<NotFoundPage />} />*/}


            </Routes>
        </>
    )
}

export default App;