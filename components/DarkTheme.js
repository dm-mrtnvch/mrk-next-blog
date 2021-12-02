export function DarkTheme() {
    return (
        <style jsx global>{`
          /* Dark theme */
          :root {
            --background-color: black;
            --link-color: yellow;
            --text-color: white;
          }
        `}</style>
    )
}

export default DarkTheme