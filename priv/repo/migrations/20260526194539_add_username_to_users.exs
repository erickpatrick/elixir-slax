defmodule Slax.Repo.Migrations.AddUsernameToUsers do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :username, :text
    end

    execute """
              update users
              set username = email
            """,
            ""

    create unique_index(:users, :username)
  end
end
